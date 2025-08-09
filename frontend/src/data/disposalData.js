export const disposalData = {
  discard: {
    title: "Responsible Disposal",
    icon: "🗑️",
    description: "How to properly discard this item when it's no longer usable",
    options: [
      {
        method: "Textile Recycling Bin",
        icon: "♻️",
        details: "Find specialized textile recycling bins in your area",
        action: "Search locations"
      },
      {
        method: "Brand Take-Back",
        icon: "🔄",
        details: "Return to any GreenThread store for recycling",
        action: "Find stores"
      },
      {
        method: "Municipal Collection",
        icon: "🚛",
        details: "Check local waste management textile collection days",
        action: "View schedule"
      }
    ],
    color: "#ED9BA0" // Pink
  },
  resell: {
    title: "Get Cash for Your Shirt",
    icon: "💰",
    description: "Where to sell for the best price in your area",
    options: [
      {
        store: "Second Life Fashion",
        distance: "1.2 miles away",
        rating: "4.8 ★ (128 reviews)",
        icon: "👕",
        action: "Get directions"
      },
      {
        store: "Vintage Vogue Exchange",
        distance: "2.5 miles away",
        rating: "4.6 ★ (94 reviews)",
        icon: "👚",
        action: "Get directions"
      },
      {
        store: "GreenThread Buyback",
        distance: "0.8 miles away",
        rating: "4.9 ★ (210 reviews)",
        icon: "🌿",
        action: "Check prices"
      }
    ],
    color: "#FBDE8E" // Yellow
  },
  donate: {
    title: "Give It a Second Life",
    icon: "❤️",
    description: "Places that will accept your donation",
    options: [
      {
        organization: "Community Clothing Bank",
        distance: "3.1 miles away",
        accepts: "Accepts all wearable clothing",
        icon: "🏘️",
        action: "See hours"
      },
      {
        organization: "Refugee Support Center",
        distance: "4.3 miles away",
        accepts: "Accepts gently used items",
        icon: "🕊️",
        action: "Learn more"
      },
      {
        organization: "GreenThread Donation Box",
        distance: "1.7 miles away",
        accepts: "24/7 drop-off available",
        icon: "📦",
        action: "View map"
      }
    ],
    color: "#92C7E7" // Blue
  }
};