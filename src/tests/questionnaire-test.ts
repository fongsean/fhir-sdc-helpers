export const questionnaireTest: fhir4.Questionnaire = {
  resourceType: "Questionnaire",
  status: "draft",
  item: [
    {
      linkId: "container",
      type: "group",
      repeats: true,
      item: [
        {
          linkId: "switcher",
          text: "When true, enable String 1, when false, enable String 2",
          type: "display"
        },
        {
          linkId: "switcher",
          text: "Switcher",
          type: "boolean"
        },
        {
          linkId: "string-1",
          text: "String 1",
          type: "string",
          enableWhen: [
            {
              question: "switcher",
              operator: "=",
              answerBoolean: true
            }
          ]
        },
        {
          linkId: "string-2",
          text: "String 2",
          type: "string",
          enableWhen: [
            {
              question: "switcher",
              operator: "=",
              answerBoolean: false
            }
          ]
        }
      ]
    }
  ]
};
