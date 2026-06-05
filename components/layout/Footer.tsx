export default function Footer() {
  return (
    <footer className="border-border dark:border-border flex items-center justify-around border-t">
      <div className="mx-auto h-14 max-w-(--container-max) p-(--container-px)">
        <p className="text-text-muted text-center text-sm">
          &copy; {new Date().getFullYear()} Godstime Sunday. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
