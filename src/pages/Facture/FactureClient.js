import { useState, useRef } from "react";
import ClientDetails from "../../components/factures/ClientDetails";
import Dates from "../../components/factures/Dates";
import Footer from "../../components/factures/Footer";
import MainDetails from "../../components/factures/MainDetails";
import Notes from "../../components/factures/Notes";
import Table from "../../components/factures/Table";
import TableForm from "../../components/factures/TableForm";
import { useReactToPrint } from "react-to-print";
import Table1 from "../../components/factures/table1";
import logo from '../../assets/logo.png';


function Facture() {
    const [showInvoice, setShowInvoice] = useState(false)
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [phoneC,setPhoneC] = useState("")
    const [address,setAddress] = useState("")
    const [code,setCode] = useState("")
    const [entreprise,setEntreprise] = useState("")
    const [clientName,setClientName] = useState("")
    const [clientAddress,setClientAddress] = useState("")
    const [invoiceNumber,setInvoiceNumber] = useState("")
    const [invoiceDate,setInvoiceDate] = useState("")
    const [dueDate,setDueDate] = useState("")
    const [notes,setNotes] = useState("")
    const [description,setDescription] = useState("")
    const [quantity,setQuantity] = useState("")
    const [price,setPrice] = useState("")
    const [amount,setAmount] = useState("")
    const [list,setList] = useState([])
    const [somme, setSomme] = useState(0)
    const [somme1, setSomme1] = useState(0)
    const [vat20, setVat20] = useState("")
    const [Avance,setAvance] = useState(0)
    const [vatAmount, setVatAmount] = useState(0);
    

    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    });

    const[isToggled,setIsToggled]=useState(false)


    return(
        <>
        <main className="m-3 p-2 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow row print-container">
        <button className="bg-blue-500 text-white font-bold py-0.4 px-0.2 rounded shodow border-2 border-blue-500 hover:bg-trasparent hover:text-blue-300 transition-all duration-300" onClick={handlePrint}>   
            Télécharger/Imprimer
        </button>
            { showInvoice ? (
                <>
            <div ref={componentRef}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      {/* Logo à gauche */}
      <div className="mr-4">
        <img src={logo} style={{ width: '200px', height: '200px' }} alt="Logo de l'entreprise" />
      </div>
      {/* Informations de l'entreprise à droite */}
      <div className="text-right">
        <h3 className="font-normal tracking-wide text-5xl mb-0.5 text-blue-500">Quincaillerie<span className="text-black">BENAOUDA</span></h3>
        <h4 className="font-bold tracking-wide text-2xl mb-0.5 text-blue-500">Vente de Matériaux de Construction&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
      </div>
    </div>
    <div className="flex items-center justify-center h-full">
    <h2 className="block p-1 rounded-lg text-black">
        Devis : {invoiceNumber}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </h2>
    </div>
    <hr className="my-2 border-gray-400" />
            <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} clientName={clientName} clientAddress={clientAddress} code={code} phoneC={phoneC} />
            <hr className="my-2 border-gray-400" />
            <Table description={description} price={price} quantity={quantity} amount={amount} list={list} setList={setList} somme={somme} setSomme={setSomme} somme1={somme1} setSomme1={setSomme1} vatAmount={vatAmount} setVatAmount={setVatAmount} vat20={vat20} setVat20={setVat20} Avance={Avance} setAvance={setAvance} />
            <hr className="my-2 border-gray-400" />
            <div>
            <button className="text-xl font-bold font-normal text-white" onClick={()=>setIsToggled(!isToggled)}>TVA</button>
            {isToggled && <Table1 somme={somme}/>}
            </div>
            <div>
            <div className="w-1/2 border border-red-300 p-1 rounded-lg float-center">
      
      <div className="mb-1">
        <span className="block border border-red-300 p-2 rounded-lg text-black">Total HT:&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">{somme1.toLocaleString()}Dh</span> </span> 
      </div>
      <div className="mb-1">
        <span className="block border border-red-300 p-2 rounded-lg text-black">Avance : &nbsp;&nbsp;&nbsp;&nbsp;{Avance.toLocaleString()}Dh</span>
      </div>
      <div className="mb-1">
        <span className="block border border-red-300 p-2 rounded-lg text-black">Reste : &nbsp;&nbsp;&nbsp;&nbsp;{somme.toLocaleString()}Dh</span>
      </div>
    </div>
            </div>
            <div>
                <h2 className="flex items-end justify-end text-2xl font-bold font-normal text-bleu">Réglement:espéce&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
            </div>
            <Notes notes={notes}/>
            <hr></hr>
            </div>
            <button onClick={()=> setShowInvoice(false)} className="bg-blue-500 text-white font-normal py-0.2 px-0.2 rounded shodow border-0.5 border-blue-200 hover:bg-trasparent hover:text-blue-200 transition-all duration-300">
               Modifier les informations
            </button>
            </>
            ):(
                <>
                <div className="flex flex-col justify-center">
                <article className="md:grid grid-cols-3 gap-10 ">
                <div className="flex flex-col">
                </div>
                </article>
                <article className="md:grid grid-cols-2 gap-10 ">
                </article>
                <article className="md:grid grid-cols-3 gap-10 ">
                <div className="flex flex-col" >
               <label htmlFor="invoiceNumber">Numéro de facture</label>
                  <input
                    type="text"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    placeholder=""
                    autoComplete="off"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                />
               </div>
                <div className="flex flex-col">
                <label htmlFor="clientName">Entrez le nom de votre client:</label>
                  <input
                    type="text"
                    name="clientName"
                    id="clientName"
                    placeholder=""
                    autoComplete="off"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                />
                </div>
                <div className="flex flex-col">
                <label htmlFor="clientAddress">
                     Entrez l'adresse de votre client:
                </label>
                <input
                    type="text"
                    name="clientAddress"
                    id="clientAddress"
                    placeholder=""
                    autoComplete="off"
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                />
                </div>
                </article>
                <article className="md:grid grid-cols-3 gap-10 ">
                <div className="flex flex-col">
                <label htmlFor="clientAddress">
                     Entrez le code du client:
                </label>
                <input
                    type="text"
                    name="code"
                    id="code"
                    placeholder=""
                    autoComplete="off"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                />
                </div>
               <div className="flex flex-col" >
               <label htmlFor="invoiceNumber">Enter le téléphone de votre client</label>
                  <input
                    type="text"
                    name="phoneC"
                    id="phoneC"
                    placeholder=""
                    autoComplete="off"
                    value={phoneC}
                    onChange={(e) => setPhoneC(e.target.value)}
                />
               </div>
               
                <div className="flex flex-col">
                <label htmlFor="invoiceDate">Date de facturation</label>
                  <input
                    type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    placeholder=""
                    autoComplete="off"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                />
                </div>
               </article>


               <article>
                <TableForm description={description} 
                           setDescription={setDescription}
                           
                           quantity={quantity} 
                           setQuantity={setQuantity}
                           
                           price={price} 
                           setPrice={setPrice}
                           
                           amount={amount} 
                           setAmount={setAmount}
                           
                           list={list}
                           setList={setList}

                           somme={somme} 
                           setSomme={setSomme}

                           vat20={vat20}
                           setVat20={setVat20}

                           Avance={Avance}
                           setAvance={setAvance}

                           somme1={somme1} 
                           setSomme1={setSomme1}

                           />                           
                </article> 

                <label htmlFor="notes">Notes complémentaires</label>
                 <textarea
                name="notes"
                id="notes"
                cols="30"
                rows="10"
                placeholder="..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                ></textarea>

                <button onClick={()=>setShowInvoice(true)} 
                className="bg-blue-500 text-white font-bold py-0.4 px-0.2 rounded shodow border-2 border-blue-500 hover:bg-trasparent hover:text-blue-300 transition-all duration-300">
                Aperçu de la facture</button>
                </div>
                </>
            )
            }
        </main>
        </>
    );
}
export default Facture;