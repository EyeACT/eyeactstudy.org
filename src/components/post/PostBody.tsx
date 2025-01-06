interface PostBodyProps {
  content: string;
}

const postBody: React.FC<PostBodyProps> = ({ content }) => {
  return (
    <div className='prose prose-slate mt-4 max-w-none lg:prose-base prose-h1:mt-8 prose-h1:text-slate-700 prose-h2:mt-4 prose-h2:border-b-2 prose-h2:pb-2 prose-h2:text-slate-700 prose-h3:text-slate-700 prose-a:text-[#025988] hover:prose-a:text-[#0e8cd0] prose-img:mx-auto prose-img:rounded-md prose-img:shadow-xl'>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default postBody;
