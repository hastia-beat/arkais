const Loading = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-color-dark">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-color-accent"></div>
        <p className="mt-4 text-color-accent text-xl">Loading...</p>
      </div>
    );
  };
  
  export default Loading;
  