"use client";

import { useEffect, useState } from "react";
import { getDeliveryPartners } from "@/services/deliveryPartnerService";
import { DeliveryPartner } from "@/types/deliveryPartner";

export function useDeliveryPartners() {
  const [deliveryPartners, setDeliveryPartners] = useState<
    DeliveryPartner[]
  >([]);

  const [loading, setLoading] = useState(true);

  async function loadDeliveryPartners() {
    try {
      setLoading(true);

      const data = await getDeliveryPartners();

      setDeliveryPartners(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadDeliveryPartners();
  }, []);

  return {
    deliveryPartners,
    loading,
    reload: loadDeliveryPartners,
  };
}