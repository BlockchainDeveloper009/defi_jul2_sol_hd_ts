// utils/dateUtils.ts

export function getTodaysDate(): string {
    const today = new Date();
    return formatDate(today);
  }
  
  export function getDateAfterDays(days: number): string {
    const today = new Date();
    const dateAfterDays = new Date(today.getTime() + days * 24 * 60 * 60 * 1000);
    return formatDate(dateAfterDays);
  }
  
  export function addDaysToDate(dateString: string, days: number): string {
    const date = new Date(dateString);
    const newDate = new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
    return formatDate(newDate);
  }
  
  export function formatTimestamp(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
      timeZoneName: 'short',
    };
    return date.toLocaleString('en-US', options);
  }
  
  function formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based, so we add 1
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  