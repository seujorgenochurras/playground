/*i dont remember exacly what this code does
  but its something with my math homework
*/
class PA {
  private razao: number;
  private inicial: number;
  private tamanho: number;

  public getRazao(): number {
    return this.razao;
  }
  public setRazao(value: number) {
    this.razao = value;
  }
  public getTamanho(): number {
    return this.tamanho;
  }
  public setTamanho(value: number) {
    this.tamanho = value;
  }

  public getInicial(): number {
    return this.inicial;
  }
  public setInicial(value: number) {
    this.inicial = value;
  }

  public pA() : number[]{
    let final: number[] = [this.inicial] 
    let a = 0;
  for (let i = 0; i < this.tamanho; i++) {
    a = final[i] + this.razao;
    final.push(a)
    }
    return final;
  }
  
  public getNumberByPosition(index: number) {
    let a = this.inicial + (index - 1) * this.razao;
    return a;
  }
  
  
  constructor(razao: number, tamanho: number, inicial: number) {
    this.razao = razao;
    this.tamanho = tamanho;
    this.inicial = inicial;
  }
   
}




const myPA = new PA(57, 1000, 114)

console.log(myPA.pA())
console.log(myPA.getNumberByPosition(2))
