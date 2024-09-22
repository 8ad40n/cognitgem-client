"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          {`</> Developed by`}{" "}
          <Link className="font-semibold" href="https://www.linkedin.com/in/badhon-nath-joy-5ab740209/">
            {" "}
            Badhon Nath Joy{" "}
          </Link>
        </p>
      </div>
    </footer>
  );
}
