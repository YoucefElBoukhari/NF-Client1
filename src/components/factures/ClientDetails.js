export default function ClientDetails ({clientName , clientAddress , code ,phoneC}) {
    return (
      <div className="w-1/2 border border-red-300 p-1 rounded-lg">
      <div className="mb-1">
        <span className="block border border-red-300 p-2 rounded-lg text-black">A Mr : {clientName}</span>
      </div>
      <div className="mb-1">
        <span className="block border border-red-300 p-2 rounded-lg text-black">Adresse : {clientAddress}</span>
      </div>
      <div>
        <span className="block border border-red-300 p-2 rounded-lg text-black">Code client : {code}</span>
      </div>
      <div>
        <span className="block border border-red-300 p-2 rounded-lg text-black">Téléphone client : {phoneC}</span>
      </div>
    </div>
    );
}