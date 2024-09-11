"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { IoSend } from "react-icons/io5";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ChatPage() {

  const session = useSession();
  console.log(session.data);

  const [conversation, setConversation] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleForm = async (e) => {
    e.preventDefault();
    const prompt = e.target.prompt.value;
    if (!prompt) return;

    setConversation((prev) => [...prev, { sender: "user", message: prompt }]);

    e.target.prompt.value = "";

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/generate", {
        prompt,
      });
      const generatedText = res.data.text;

      setConversation((prev) => [
        ...prev,
        { sender: "ai", message: generatedText },
      ]);
      setLoading(false);
    } catch (error) {
      console.error("Error generating content:", error);
      setConversation((prev) => [
        ...prev,
        {
          sender: "ai",
          message: "Error generating content. Please try again.",
        },
      ]);
      setLoading(false);
    }
  };

  const renderMessage = (message) => {
    return (
      <ReactMarkdown
        children={message}
        components={{
          code({ inline, className, children }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={vscDarkPlus}
                language={match[1]}
                PreTag="div"
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className}>{children}</code>
            );
          },
        }}
      />
    );
  };

  return (
    <div className="bg-[#131314]">
      <div className="container mx-auto p-4">
        <ScrollArea className="w-full h-[75vh] rounded-md p-4">
        {session?.data?.user && (
            <div className="flex items-center mb-4">
              <Image
                src={session.data.user.image}
                alt={session.data.user.name}
                width={50} 
                height={50}
                className="rounded-full mr-4"
              />
              <h1 className="text-white font-bold">{session.data.user.name}</h1>
            </div>
          )}
          {conversation.map((chat, index) => (
            <div
              key={index}
              className={`mb-4 ${
                chat.sender === "user" ? "text-right" : "text-left"
              }`}
            >
              <div
                className={`inline-block p-2 rounded-lg ${
                  chat.sender === "user"
                    ? "bg-[#2f2f2f] text-white px-3 py-2 rounded-xl"
                    : ""
                }`}
              >
                <div>
                  {chat.sender === "user" ? "User:" : "AI:"}
                </div>
                {renderMessage(chat.message)}
              </div>
            </div>
          ))}
          {loading && (
            <div className="text-center text-gray-500">
              Generating response...
            </div>
          )}
        </ScrollArea>

        <form onSubmit={handleForm} className="flex items-center mt-4">
          <Input
            type="text"
            placeholder="Write your prompt..."
            name="prompt"
            className="flex-1 mr-2"
          />
          <Button type="submit" disabled={loading}>
            <IoSend></IoSend>
          </Button>
        </form>
      </div>
    </div>
  );
}
