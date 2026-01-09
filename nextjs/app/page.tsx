"use client";

import { useKeycloak } from "@/hooks/useKeycloak";

export default function Home() {
  const { isAuthenticated, handleLogout, isLoading } = useKeycloak();

  return (
    <div className="flex min-h-screen p-10 justify-center items-center text-center bg-neutral-50 text-neutral-950">
      <div className="space-y-10">
        <h1 className="font-bold text-7xl">Keycloak Test</h1>

        {isLoading ? (
          <span className="font-semibold">Loading...</span>
        ) : (
          <div className="space-y-3 text-4xl">
            {isAuthenticated ? (
              <div className="space-y-5">
                <h3 className="text-green-500 font-semibold">User is Authenticated</h3>

                <button
                  onClick={() => handleLogout()}
                  className="cursor-pointer text-2xl px-5 py-2 text-neutral-50 rounded-md bg-red-600"
                >
                  Logout
                </button>
              </div>
            ) : (
              <h3 className="text-red-500 font-semibold">User is Not Authenticated</h3>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
