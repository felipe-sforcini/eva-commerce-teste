import './style.css';
import CategoryHighlight from '../../components/CategoryHighlight';

export default function Highlights() {

    return (
        <>
            <CategoryHighlight />
            <CategoryHighlight index="1" />
            <CategoryHighlight index="2" />
            <CategoryHighlight index="3" />
        </>
    )
}