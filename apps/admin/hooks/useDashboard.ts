"use client";

import { useEffect, useState } from "react";
import { getDashboardStats } from "@/services/dashboardService";

export function useDashboard() {
  const [stats, setStats] = useState({
    customers: 0,
    merchants: 0,
    products: 0,
    orders: 0,
  });

  const [loading, setLoading] = useState(true);

  async function load() {
    try {
      setLoading(true);
      const data = await getDashboardStats();
      setStats(data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return {
    stats,
    loading,
    reload: load,
  };
}
