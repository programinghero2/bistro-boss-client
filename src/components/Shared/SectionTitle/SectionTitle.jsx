const SectionTitle = ({subHeading,heading}) => {
    return (
        <div className='my-5 w-1/2 mx-auto text-center'>
            <p className='mb-3 text-yellow-600'>--- {subHeading} ---</p>
            <h1 className='border-y-2 text-2xl font-bold py-3 uppercase'>{heading}</h1>
        </div>
    );
};

export default SectionTitle;