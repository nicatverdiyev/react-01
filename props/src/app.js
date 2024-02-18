import Book from './components/Book'

function App() {
  return (
   <>
    <Book 
    name="Hökmdar"
    author="NİKOLO MAKİAVELLİ"
    price={78}
    image ="https://static.insales-cdn.com/files/1/4253/9851037/original/e7a278bffdad39b1ea819714dbf488dc.png" />
    
    <Book 
    name="Yazıçı"
    author="AMİD SELİMOĞLU"
    price={50}
    image ="https://www.kitabyurdu.org/uploads/posts/2023-05/1683471945_20230417_001046_0000.png" />
    
    <Book 
    name="Kimsesiz"
    author="AMİD SELİMOĞLU"
    price={15}
    image ="https://www.kitabyurdu.org/uploads/posts/2021-08/1629664678_20210821_001557_0000.png" />
    
    <Book 
    name="Karantina"
    author="BEYZA ALKOÇ"
    price={20}
    image ="https://bakubookcenter.az/get-product-image?fileId=29449&year=2020&month=02" />
   </>
  )
}

export default App;