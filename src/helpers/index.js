export function formatToCurrency(value){
    return value.toLocaleString('en-US', {style: "currency", currency: "USD"})
}

export function formatDate(date){
    const options = {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }
    return date.toLocaleDateString('en-US', options)
}

export function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
}