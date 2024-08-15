import { useOutlet } from 'react-router-dom'

export const DefaultLayout = () => {
    const outlet = useOutlet()

    return (
        <div className="relative min-h-screen">
            {outlet}
        </div>
    )
}
