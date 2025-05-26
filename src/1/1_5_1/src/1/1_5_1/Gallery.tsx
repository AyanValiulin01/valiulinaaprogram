import { Profile } from "./profile.tsx";

export default function Gallery() {
    return (
        <div>
            <h1>Notable Scientists</h1>
            <Profile
                name="Maria Skłodowska-Curie"
                imageId="Maria"
                profession="physicist and chemist"
                awards="4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
                discovery="polonium (chemical element)"
            />
            <Profile
                name="Katsuko Saruhashi"
                imageId="KatsukoSaruhashi"
                profession="geochemist"
                awards="2 (Miyake Prize for geochemistry, Tanaka Prize)"
                discovery="a method for measuring carbon dioxide in seawater"
            />
        </div>
    );
}
