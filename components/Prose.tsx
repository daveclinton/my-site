export const Prose: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="max-w-none prose prose-a:text-regal-yellow dark:prose-invert">
      {children}
    </div>
  );
};
