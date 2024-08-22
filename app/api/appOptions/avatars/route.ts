import supabase from '@/lib/supabase/supabase'

export async function POST(request: Request) {
  const res = await request.json()
  console.log(res)
  const data = [
    {
      name: 'Clara',
      avatar: 'https://your-placeholder-url.com/avatar1.png',
      rating: 4.5,
      price: 0,
      accent: 'British',
      isCurrent: true
    },
    {
      name: 'Liam',
      avatar: 'https://your-placeholder-url.com/avatar2.png',
      rating: 4.7,
      price: 79,
      accent: 'American',
      isCurrent: false
    },
    {
      name: 'Nata',
      avatar: 'https://your-placeholder-url.com/avatar3.png',
      rating: 4.9,
      price: 99,
      accent: 'American',
      isCurrent: false
    }
  ]

  return Response.json({ data })
}
