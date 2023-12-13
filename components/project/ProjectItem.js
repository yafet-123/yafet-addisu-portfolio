import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/router'

const ProjectItem = ({title, backgroundImg, tech, projectUrl, data,id})=>{
	return(
		<Link
      		href={`/SelectedWorks/${id}`}
      		className="text-white flex flex-col cursor-pointer shadow-md hover:shadow-xl shadow-inherit overflow-hidden hover:scale-95 transition-transform duration-300 border shadow-2xl"
      		key={id}
    	>
      		<div className="relative h-[400px] w-full">
        		<Image
          			src={backgroundImg} 
					alt={title} 
          			className="h-full w-full"
          			layout="fill"
        		/>
      		</div>
 
      		<h1 className="my-[1rem] text-left font-poppins font-semibold text-[1.3rem] text-[#010101] text-center">
        		{data}
      		</h1>
    	</Link>
	)
}

export default ProjectItem