import { redirect } from "@tanstack/react-router";

function getCookie(cookieName: string) {
  return document.cookie
    .split("; ")
    .find((c) => c.startsWith(`${cookieName}=`))
    ?.split("=")[1];
}

export function redirectIfAuthenticated() {
    const accessToken = getCookie("@pitang/accessToken");
  
    if (accessToken) {
        throw redirect({
        to: "/dashboard",
        });
    }
}

export function redirectIfNotAuthenticated() {
     const accessToken = getCookie("@pitang/accessToken");
    
    if (!accessToken) {
        throw redirect({
        to: "/login",
        });
    }   
}