export class QuestionModel {
  public type: number;
  public title: string;
  public value: string;
  public multyValues: string[];
  public placeholder = 'Answer';

  constructor(
    type: number,
    title: string,
    value: string,
    multyValues: string[]
  ) {
    this.type = type;
    this.title = title;
    this.value = value;
    this.multyValues = multyValues;
  }
}
