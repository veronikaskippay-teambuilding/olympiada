import { useState, useEffect } from 'react'

const geoQuiz = [
  { image:'/images/paraguay.png', options:['Paraguay','Chile','Peru','Bolívie']},
  { image:'/images/vietnam.png', options:['Thajsko','Vietnam','Laos','Kambodža']},
  { image:'/images/japonsko.png', options:['Filipíny','Japonsko','Indonésie','Korea']},
  { image:'/images/chile.png', options:['Chile','Argentina','Peru','Brazílie']},
  { image:'/images/severni-korea.png', options:['Jižní Korea','Čína','Severní Korea','Japonsko']},
  { image:'/images/nizozemsko.png', options:['Belgie','Nizozemsko','Německo','Dánsko']},
  { image:'/images/chorvatsko.png', options:['Řecko','Chorvatsko','Itálie','Albánie']},
  { image:'/images/novy-zeland.png', options:['Austrálie','Nový Zéland','Fidži','Papua']},
  { image:'/images/kuba.png', options:['Kuba','Jamajka','Haiti','Bahamy']},
  { image:'/images/gronsko.png', options:['Island','Grónsko','Norsko','Kanada']}
]

export default function App(){
  const [team,setTeam]=useState('')
  const [index,setIndex]=useState(0)

  useEffect(()=>{
    const t=localStorage.getItem('teamName')
    if(t) setTeam(t)
  },[])

  if(!team){
    return(
      <div style={{padding:20}}>
        <h2>Název týmu</h2>
        <input onChange={(e)=>setTeam(e.target.value)}/>
        <button onClick={()=>localStorage.setItem('teamName',team)}>Start</button>
      </div>
    )
  }

  const q=geoQuiz[index]

  return(
    <div style={{padding:20}}>
      <h3>Tým: {team}</h3>
      <h2>{index+1}/{geoQuiz.length}</h2>
      <img src={q.image} style={{width:'100%',maxWidth:300}}/>
      {q.options.map(o=>(
        <button key={o} onClick={()=>setIndex(index+1)} style={{display:'block',margin:5}}>{o}</button>
      ))}
    </div>
  )
}
