const { data, status } = useQuery({
  queryKey: builder.$g,
});

const profile = {
  state: "idle",
  data: null,
  get status() {
    switch (this.state) {
      case "idle":
        return "Fetch has not started yet.";
      case "fetching":
        return "Fetch is in progress.";
      case "success":
        return "Fetch completed successfully.";
      case "error":
        return "Fetch encountered an error.";
      default:
        return "Unknown fetch state.";
    }
  },
};

async function getProfile() {
  profile.state = "fetching";

  try {
    const response = await fetch("https://api.example.com/data");
    const result = await response.json();

    profile.data ??= result;
    profile.state = "success";
  } catch (error) {
    profile.state = "error";
    console.error("Fetch error:", error);
  }
}
