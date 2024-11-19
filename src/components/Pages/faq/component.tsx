import { PageComponentType } from '@/lib/types'
import ContentComponent from './content.mdx'

// Define the TypeScript interfaces
export const FaqPage: PageComponentType = () => {

    // const { faqId } = useParams()

    return <article><ContentComponent /></article>;
  }

  FaqPage.path = "/faq"
