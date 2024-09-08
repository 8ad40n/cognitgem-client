"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function page() {
  const handleForm = (e) => {
    e.preventDefault();
    const prompt = e.target.prompt.value;
    console.log(prompt);
    
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
