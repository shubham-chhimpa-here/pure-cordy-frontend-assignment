import membershipImg from '../assets/memebership.png'
import img3 from '../assets/img3.png'
import clubandgroupsImg from '../assets/clubandgroups.png'

export default function Features() {
    return <>
    <section className="m-4 md:m-8   text-gray-700">
	<div className="container mx-auto p-4 my-6 space-y-2 text-center">
		<h2 className="text-2xl font-bold lg:text-5xl">Manage your entire community <br /> in a single system</h2>
		<p className="text-gray-600">Who is Nextcent suitable for?</p>
	</div>
	<div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 text-center">
		<div className="flex flex-col items-center p-4 shadow">
			<img src={membershipImg} alt="" />
			<h3 className="my-3 text-3xl font-semibold">Membership <br /> Organisations</h3>
			<div className="space-y-1 leading-tight">
				<p>Our membership managememt <br />
		software provides full automation of <br />
				membeship renewals and payments</p>
			</div>
		</div>
		<div className="flex flex-col items-center p-4 shadow">
		<img src={img3} alt="" />
			<h3 className="my-3 text-3xl font-semibold">National <br /> Associations</h3>
			<div className="space-y-1 leading-tight">
				<p>Our membership management <br /> software provides full automation of <br /> membership renewals and <br /> payments </p>
			
			</div>
		</div>
		<div className="flex flex-col items-center p-4 shadow">
		<img src={clubandgroupsImg} alt="" />
			<h3 className="my-3 text-3xl font-semibold">Clubs And <br /> Groups</h3>
			<div className="space-y-1 leading-tight">
				<p>Our memebership management <br />software provides full automation of <br /> memership renewals and payments</p>
			</div>
		</div>
		
	</div>
</section>
    </>
}