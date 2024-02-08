import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';


const GoBackButton = () => {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
         <ArrowLeft className='pr-1' /> Back
    </button>
  );
}

export default GoBackButton;
