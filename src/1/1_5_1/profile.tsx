import { getImageUrl } from "./util";

interface ProfileProps {
    name: string;
    imageId: string;
    profession: string;
    awards: string;
    discovery: string;
}

export function Profile({ name, imageId, profession, awards, discovery }: ProfileProps) {
    return (
        <section className="profile">
            <h2>{name}</h2>
            <img
                className="avatar"
                src={getImageUrl(imageId)}
                alt={name}
                width={70}
                height={70}
            />
            <ul>
                <li>
                    <b>Profession: </b> {profession}
                </li>
                <li>
                    <b>Awards: </b> {awards}
                </li>
                <li>
                    <b>Discovered: </b> {discovery}
                </li>
            </ul>
        </section>
    );
}
