"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";

export default function page() {
  const handleForm = async(e) => {
    e.preventDefault();
    const prompt = e.target.prompt.value;
    console.log(prompt);

    try {
      const res = await axios.post("http://localhost:5000/generate", { prompt });
      console.log(res.data);
    } catch (error) {
      console.error("Error generating content:", error);
    }
  };
  return (
    <div className="container mx-auto">
      <form onSubmit={handleForm}>
        <Input type="text" placeholder="Write your prompt..." name="prompt" />
        <Button type="submit">Generate</Button>
      </form>
    </div>
  );
}
