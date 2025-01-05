"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const ASCII_ART = `
 _   _       _   ______                     _ 
| \\ | |     | | |  ____|                   | |
|  \\| | ___ | |_| |__ ___  _   _ _ __   __ | |
| . \` |/ _ \\| __|  __/ _ \\| | | | '_ \\ / _\` |
| |\\  | (_) | |_| | | (_) | |_| | | | | (_| |_
|_| \\_|\\___/ \\__|_|  \\___/ \\__,_|_| |_|\\__,_(_)
`;

const COMMANDS = {
  help: "Available commands: help, home, clear",
  home: "Redirecting to home page...",
};

export default function NotFound() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleCommand = (cmd: string) => {
    setOutput((prev) => [...prev, `$ ${cmd}`]);

    switch (cmd.toLowerCase()) {
      case "help":
        setOutput((prev) => [...prev, COMMANDS.help]);
        break;
      case "home":
        setOutput((prev) => [...prev, COMMANDS.home]);
        setTimeout(() => router.push("/"), 1000);
        break;
      case "clear":
        setOutput([]);
        break;
      default:
        setOutput((prev) => [...prev, `Command not found: ${cmd}`]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input.trim());
      setInput("");
    }
  };

  return (
    <div className="flex fixed inset-0 bg-black">
      <div className="bg-black text-green-500 overflow-auto p-4 font-mono w-full h-full">
        <pre className="text-xs sm:text-sm md:text-base">{ASCII_ART}</pre>
        <div className="mt-4">
          <p>Page not found. Type 'help' for available commands.</p>
          {output.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex w-full">
          <span className="mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onBlur={(e) => e.currentTarget.focus()}
            className="flex-grow bg-transparent outline-none"
            aria-label="Terminal input"
          />
        </form>
      </div>
    </div>
  );
}
