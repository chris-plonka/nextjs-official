import directus from "@/lib/directus";
import Image from "next/image";


const CTACard = async () => {
    /*
        const formAction = async (formData: FormData) => {
            "use server";
            try {
                const email = formData.get("email");
                await directus.items("subscribers").createOne({
                    email,
                });
                revalidateTag("subscribers-count");
            } catch (error) {
                console.log(error);
            }
    
        };
    
        const subscribersCount = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}items/subscribers?meta=total_count&access_token=${process.env.ADMIN_TOKEN}`,
            {
                next: {
                    tags: ["subscribers-count"],
                },
            }
        )
            .then((res) => res.json())
            .then((res) => res.meta.total_count)
            .catch((error) => console.log(error));
    */
    return (
        <div className="relative px-6 py-10 overflow-hidden wrounded-md bg-slate-100">
            {/* Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/95 via-white/70 to-white/30" />
            {/* Image */}
            <Image
                fill
                alt="CTA Card Image"
                className="object-cover object-center"
                src="https://images.unsplash.com/photo-1672600830594-ae4ccc159578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1263&q=80"
            />


            { /* Content Container */}
            <div className="relative z-20">
                <div className="text-lg font-medium">#exploretheworld</div>
                <h3 className="mt-3 text-4xl font-semibold">Explore the world with me!</h3>
                <p className="max-w-lg mt-2 text-lg">Explore the world with me! I am traveling around the world. I have visited most of the great cities of USA and currently I am traveling in Europe. Join me!</p>

                {/* Form */}
                <form
                    /*      key={subscribersCount + "subscribers-form"}
                          action={formAction} */
                    className="flex itens-center gap-2 mt-6"
                >
                    <input
                        type="email"
                        name="email"
                        placeholder="Write your email."
                        className="w-full py-2 px-3 text-base bg-white/80 rounded-md outline-none md:w-auto placeholder:text-sm focus:ring-2 ring-neutral-600"
                    />
                    <button className="px-3 py-2 whitespace-nowrap rounded-md bg-neutral-900 text-neutral-200">Sign Up</button>
                </form>

                {/* Subsribers */}
                {/*  <div className="mt-5 text-neutral-700">
                    Join our {" "}
                    <span className="px-2 py-1 text-sm bg-neutral-700 rounded-md text-neutral-100">{subscribersCount}</span>
                    {" "}subscribers now!
    </div> */}
            </div>
        </div >
    );
};

export default CTACard;
