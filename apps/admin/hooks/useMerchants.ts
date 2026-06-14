"use client";

import { useEffect, useState } from "react";
import { getMerchants } from "@/services/merchantService";
import { Merchant } from "@/types/merchant";

export function useMerchants() {
  const [merchants, setMerchants] = useState<Merchant[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadMerchants() {
    try {
      setLoading(true);
      const data = await getMerchants();
      setMerchants(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadMerchants();
  }, []);

  return {
    merchants,
    loading,
    reload: loadMerchants,
  };
}