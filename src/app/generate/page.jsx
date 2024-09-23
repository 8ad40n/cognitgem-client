"use client";
import TypingAnimation from "@/components/magicui/typing-animation";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
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
      const res = await axios.post(
        "https://cognitgem-server.vercel.app/generate",
        {
          prompt,
        }
      );
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
        components={{
          code({ inline, className, children }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <ScrollArea className="w-[80vw] whitespace-nowrap rounded-md border">
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            ) : (
              <code className={className}>{children}</code>
            );
          },
          strong({ children }) {
            return <strong className="text-xl">{children}</strong>;
          },
        }}
      >
        {message}
      </ReactMarkdown>
    );
  };
  

  return (
    <div className="mb-0">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollArea className="w-full h-[calc(100vh-150px)] md:h-[calc(100vh-170px)] rounded-md text-sm md:text-base">
          {session?.data?.user && (
            <div className="text-center mb-8 mt-14 md:mt-20">
              <TypingAnimation
                className="text-xl md:text-2xl lg:text-3xl font-medium mb-3 text-black dark:text-white"
                text={`Hello, ${session.data.user.name}`}
              />
              <div className="text-lg md:text-xl lg:text-2xl font-medium text-black dark:text-[#444746]">
                How can I help you today?
              </div>
            </div>
          )}

          {conversation.map((chat, index) => (
            <div key={index} className={`mb-4 flex items-start gap-4`}>
              {chat.sender === "user" && (
                <div className="flex items-start gap-2">
                  <Image
                    src={session.data.user.image}
                    alt={session.data.user.name}
                    width={30}
                    height={30}
                    className="rounded-full mb-2"
                  />
                  <div className="inline-block bg-[#2f2f2f] text-white px-2 py-2 rounded-xl text-left">
                    {renderMessage(chat.message)}
                  </div>
                </div>
              )}

              {chat.sender === "ai" && (
                <div className="flex items-start gap-2">
                  <Image
                    src="/assets/images/icon.png"
                    alt="AI"
                    width={30}
                    height={30}
                    className="rounded-full mb-2"
                  />
                  <div className="inline-block text-white pl-2 pr-6 py-2 rounded-xl text-left">
                    {renderMessage(chat.message)}
                  </div>
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="text-center text-gray-500 flex items-end justify-center">
              <p>Generating response...</p>
            </div>
          )}
        </ScrollArea>

        <div className="fixed bottom-0 left-0 right-0 flex justify-center items-center w-full px-4 py-4 mb-2">
          <div className="w-full md:w-[90vw] lg:w-[70vw] xl:w-[60vw]">
            <form onSubmit={handleForm} className="flex items-center w-full">
              <input
                type="text"
                placeholder="Write your prompt..."
                name="prompt"
                className="flex-1 mr-2 h-10 md:h-12 lg:h-14 rounded-xl pl-4 bg-[#1e1f20] text-sm md:text-base"
              />
              <Button
                type="submit"
                className="h-10 md:h-12 lg:h-14 bg-[#2f2f2f] border text-white rounded-xl"
                disabled={loading}
              >
                <IoSend />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
