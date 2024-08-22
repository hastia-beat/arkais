'use client';

const Result = ({ searchTerm }) => {
  return (
    <div className="flex flex-col items-center mt-8 w-full sm:w-[50%] p-4 bg-color-primary rounded-lg shadow-lg border border-color-secondary">
      <div className="text-2xl font-bold text-color-dark mb-4">Hasil Terjemahan</div>
      <div className="w-full p-4 bg-color-secondary text-color-primary rounded-lg">
        <div className="text-xl font-semibold">{searchTerm || "No result yet"}</div>
        <div className="text-sm text-color-accent mt-2">Kata Benda</div>
      </div>
    </div>
  );
};

export default Result;
