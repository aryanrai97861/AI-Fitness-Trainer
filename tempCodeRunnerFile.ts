import Vapi from "@vapi-ai/web";

// Add verbose logging for Vapi initialization
const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_API_KEY!);

// Optional: Add global error handler
vapi.on('error', (error) => {
  console.error('Global Vapi Error:', {
    timestamp: new Date().toISOString(),
    errorDetails: error
  });
});

export default vapi;