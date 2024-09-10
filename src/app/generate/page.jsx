"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ChatPage() {
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
      const res = await axios.post("http://localhost:5000/generate", { prompt });
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
        { sender: "ai", message: "Error generating content. Please try again." },
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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">AI Chat</h1>

      <div className="mb-6 border border-gray-300 p-4 rounded-lg h-96 overflow-y-auto">
        {conversation.map((chat, index) => (
          <div key={index} className={`mb-4 ${chat.sender === "user" ? "text-right" : "text-left"}`}>
            <div className={`inline-block p-2 rounded-lg ${chat.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}>
              {renderMessage(chat.message)}
            </div>
          </div>
        ))}
        {loading && <div className="text-center text-gray-500">Generating response...</div>}
      </div>

      <form onSubmit={handleForm} className="flex items-center">
        <Input type="text" placeholder="Write your prompt..." name="prompt" className="flex-1 mr-2" />
        <Button type="submit" disabled={loading}>Send</Button>
      </form>
    </div>
  );
}
