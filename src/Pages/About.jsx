import React from 'react'

function About() {
  return (
    <div className="flex flex-col items-start pt-10">
      <main className="flex-1 p-6 md:p-12 max-w-[800px] mx-auto">
        <h1 className="text-5xl font-[var(--font-heading)] font-light leading-tight mt-12 mb-6">
  Who We Are
</h1>
        <p className="text-xl leading-[1.7] max-w-prose mt-6 font-[var(--font-heading)]">
  We believe simplicity is strength. A door is not just an entry but a quiet statement—one of precision, balance, and purpose.
  <br /><br />
  With decades of experience across commercial and residential construction, we have built spaces that endure. From corporate offices to places of learning, our work has shaped environments where people live, think, and create.
  <br /><br />
  Our approach is measured. Every line, every material, every finish is considered. Nothing is excessive. Nothing is without intention.
  <br /><br />
  At Briz Doors, we do not add more. We refine what is essential.
</p>
      </main>
    </div>
  )
}

export default About