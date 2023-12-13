import { ChangeEvent, useState } from "react";

import { MapPinLine } from "@phosphor-icons/react";
import cepBrasil from 'cep-promise';
import React from "react";
import InputMask from "react-input-mask";

export default function FormPayment() {
  const [cep, setCEP] = useState('');
  const [endereco, setEndereco] = useState({
    cep: '',
    rua: '',
    bairro: '',
    cidade: '',
    uf: ''
  });

  const handleCEP = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 9)
      setCEP(e.target.value);
  }

  const handleEnderecoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEndereco({
      ...endereco,
      [e.target.name]: e.target.value
    });
  };


  const searchCEP = async () => {
    if (cep.replace(/\D+/g, '').length !== 8) return;
    try {
      const cepPesquisa = cep.replace('-', '');
      const res = await cepBrasil(cepPesquisa);
      if (res) {
        setEndereco({
          ...endereco,
          cep,
          rua: res.street,
          bairro: res.neighborhood,
          cidade: res.city,
          uf: res.state
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full flex flex-col bg-card p-10 rounded-lg">
      <div className="flex flex-row pb-8">
        <MapPinLine size={24} color='#c47e16' />
        <div className="flex flex-col pl-2 gap-1">
          <h3 className="text-base text-subtitle">Endereço de Entrega</h3>
          <p className="text-sm text-text">Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <InputMask mask="99999-999" className="w-[40%] p-3 bg-input border-2 border-button text-label rounded-md focus:outline-none focus:border-purple" name="CEP" id="CEP" placeholder="CEP" required value={cep} onChange={handleCEP} onBlur={searchCEP} />
        <input className="p-3 bg-input border-2 border-button text-label rounded-md focus:outline-none focus:border-purple"
          type="text"
          name="rua"
          id="RUA"
          placeholder="RUA"
          required
          value={endereco.rua}
          onChange={handleEnderecoChange} />
        <div className="flex gap-3">
          <input className="w-[40%] p-3 bg-input border-2 border-button text-label rounded-md focus:outline-none focus:border-purple" type="number" name="Numero" id="Numero" placeholder="Número" required />
          <input className="w-[60%] p-3 bg-input border-2 border-button text-label rounded-md focus:outline-none focus:border-purple" type="text" name="Complemento" id="Complemento" placeholder="Complemento" />
        </div>
        <div className="flex gap-3">
          <input className="w-[40%] p-3 bg-input border-2 border-button text-label rounded-md focus:outline-none focus:border-purple" type="text" name="Bairro" id="Bairro" placeholder="Bairro" required value={endereco.bairro} onChange={handleEnderecoChange} />
          <input className="w-[50%] p-3 bg-input border-2 border-button text-label rounded-md focus:outline-none focus:border-purple" type="text" name="Cidade" id="Cidade" placeholder="Cidade" required value={endereco.cidade} onChange={handleEnderecoChange} />
          <input className="w-[10%] p-3 bg-input border-2 border-button text-label rounded-md focus:outline-none focus:border-purple" type="text" name="UF" id="UF" placeholder="UF" required value={endereco.uf} onChange={handleEnderecoChange} />
        </div>
      </div>
    </div>
  )
}