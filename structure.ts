import {structureTool} from 'sanity/structure'

export const deskStructure = () =>
  structureTool({
    name: 'structure',
    title: 'Structure',
    structure: (S) =>
      S.list()
        .title('Content')
        .items([
          // 🔝 Config at the top
          S.listItem()
            .title('Config')
            .child(
              S.editor()
                .title('Configuration')
                .id('config')
                .schemaType('config')
                .documentId('config'),
            ),
          S.listItem().title('Pages').child(S.documentTypeList('pages')),
          S.listItem().title('Services').child(S.documentTypeList('services')),
        ]),
  })
