import Button from "../../../../Component/Button";

interface KeywordButtonListProps {
    indexes?: string[];
    onClick?: () => void; // onClick is now just a simple function
}

const KeywordButtonList: React.FC<KeywordButtonListProps> = ({ indexes = [], onClick }) => {
    return (
        <div className="flex space-x-2 mb-4">
            {indexes.map((index: string, indexKey: number) => (
                <Button
                    key={indexKey} // Add a unique key for each button
                    label={index}
                    onClick={onClick} // Directly pass the onClick handler
                    variant={"keyword"}
                />
            ))}
        </div>
    );
};

export default KeywordButtonList;