import React from 'react';

export default function InvoiceDetails({ invoiceNumber, invoiceDate, clientName, clientAddress, code, phoneC}) {
  return (
    <div className="flex flex-wrap">
      {/* Groupe 1 */}
      <div className="w-1/2 p-1">
      <span className="block border border-red-300 p-2 rounded-lg text-black">Date de Facturation&nbsp;:&nbsp;<span className="text-blue-500">{invoiceDate}</span>
        </span></div>
      {/* Groupe 2 */}
      <div className="w-1/2 p-1">
        <span className="block border border-red-300 p-2 rounded-lg text-black">De Mr &nbsp;:&nbsp; <span className="text-blue-500">BENAOUDA RABEH</span></span>
      </div>
      <div className="w-1/2 p-1">
        <span className="block border border-red-300 p-2 rounded-lg text-black">Adresse &nbsp;:&nbsp; <span className="text-blue-500">Khemis Sidi Yahya</span> </span>
      </div>
      <div className="w-1/2 p-1">
        <span className="block border border-red-300 p-2 rounded-lg text-black">téléphone &nbsp;:&nbsp; <span className="text-blue-500">06.61.57.91.77</span></span>
      </div>
      <div className="w-1/2 p-1">
        <span className="block border border-red-300 p-2 rounded-lg text-black">A Mr &nbsp;:&nbsp; <span className="text-blue-500">{clientName}</span></span>
      </div>
      <div className="w-1/2 p-1">
        <span className="block border border-red-300 p-2 rounded-lg text-black">Téléphone Client &nbsp;:&nbsp; <span className="text-blue-500">{phoneC}</span></span>
      </div>
      <div className="w-1/2 p-1">
        <span className="block border border-red-300 p-2 rounded-lg text-black">Adresse Client &nbsp;:&nbsp; <span className="text-blue-500">{clientAddress}</span></span>
      </div>
      <div className="w-1/2 p-1">
        <span className="block border border-red-300 p-2 rounded-lg text-black">Code client  &nbsp;:&nbsp; <span className="text-blue-500">{code}</span></span>
      </div>
    </div>
  );
}
