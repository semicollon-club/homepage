// 워크플로 점검용 테스트 컴포넌트 (test/fe-workflow-check 브랜치)
// PR 로드맵 검증을 위한 임시 파일입니다. 병합 전 제거하세요.

interface WorkflowTestBadgeProps {
  label?: string
}

function WorkflowTestBadge({ label = 'workflow ok' }: WorkflowTestBadgeProps) {
  return (
    <span
      className="workflow-test-badge"
      style={{
        display: 'inline-block',
        padding: '2px 8px',
        borderRadius: '999px',
        fontSize: '12px',
        background: '#1f2937',
        color: '#e5e7eb',
      }}
    >
      {label}
    </span>
  )
}

export default WorkflowTestBadge
