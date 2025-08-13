import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <>
      {/* Standard footer at the end of the page */}
      <footer className="border-t border-border py-6 px-4 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Nadifah Aulia Rahmani.
        </p>
      </footer>

      {/* "Back to Top" button with your original styling */}
      <a
        href="#hero"
        className="fixed bottom-6 right-6 z-50 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        aria-label="Go to top"
      >
        <ArrowUp size={20} />
      </a>
    </>
  );
};