export default function Footer() {
  return (
    <footer className="border-t border-default py-6 text-center text-sm text-(--text-secondary)">
      © {new Date().getFullYear()} Godstime Sunday. All rights reserved.
    </footer>
  );
}
