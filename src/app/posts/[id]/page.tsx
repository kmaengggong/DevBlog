export default function PostDetail({params: {id}}: {params: {id: string}}) {
    return (
        <div>
            Post Detail: {id}
        </div>
    );
}