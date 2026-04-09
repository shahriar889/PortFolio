type DoCardProps = {
    heading: string;
    icon: React.ReactNode;
    description: string;
};

const DoCard = ({heading, icon, description}: DoCardProps) => {
    return ( 
        <div className="w-full rounded-2xl bg-white p-6 shadow-sm transitiom hover:shadow-md">
            <div className="mb-4 text-blue-600">{icon}</div>
            <h3 className="text-lg font-semibold text-gray-700">{heading}</h3>
            <p className="hidden md:block mt-2 text-sm text-gray-600 leading-6">{description}</p>
        </div>
     );
}
 
export default DoCard;