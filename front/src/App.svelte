<script>
	export let name;

	const uri = 'http://localhost:5050/r/graphql/?query={Posts{title,author}}'

	const promise = fetch(uri, {method: 'GET'})
	.then(res => {
		if (res.status != 200) {
		throw new Error(`expected status 200, got ${res.status}`)
		}

	return res.json()  
	}) // todo: also check for GQL-level errors, currently we're only checking for HTTP level errors

</script>

<div class="container">
	<h1>{name}</h1>
	<p>Visit my <a href="https://dev.heimerdinger.me" target="blank">Web site development</a> to see what I'm developing.</p>
</div>
<div class="container">
	{#await promise}
	<p>...waiting</p>
	{:then result}
		<p>The result is {JSON.stringify(result)}</p>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</div>
<style>

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 2.5em;
		font-weight: 100;
		margin: .5em 0;
	}

</style>