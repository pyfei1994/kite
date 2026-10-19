import Icon from '@/assets/icon.svg'
import { useTranslation } from 'react-i18next'

export function Brand() {
  const { t } = useTranslation()

  return (
    <div className="flex items-center gap-3 rounded-md bg-[#10243f] px-3 py-2 text-white">
      <img src={Icon} alt="" className="size-8 shrink-0" />
      <div className="flex flex-col">
        <span className="whitespace-nowrap text-xl font-bold tracking-tight leading-6">
          HexaOS Ops
        </span>
        <span className="mt-0.5 text-[9px] tracking-[0.08em] text-[#91a7c1]">
          {t('brand.tagline')}
        </span>
      </div>
    </div>
  )
}
