function RoutePlaceholder({ title }) {
  return (
    <section className="route-placeholder" aria-labelledby="route-title">
      <h1 id="route-title">{title}</h1>
    </section>
  )
}

export default RoutePlaceholder
