import { Comment } from './Comment';

export function PreviewComments() {
  return (
    <div className="flex flex-col gap-5">
      <Comment
        user={{
          name: 'gln',
          avatar: {
            src: '/users/gln.png',
            alt: 'gln profile',
            width: 512,
            height: 512,
          },
        }}
        message="Swapped out the `button` for some variants we added."
        align="left"
      />
      <Comment
        message="How about this instead?"
        cursor={{
          position: 'left',
          color: 'blue',
          tooltipPosition: 'right',
          username: 'Mariana',
        }}
        align="right"
      />
      <Comment
        message="I like it. Does this work with the brand tweaks **@gln**?"
        cursor={{
          position: 'right',
          color: 'red',
          tooltipPosition: 'left',
          username: 'Rauno',
        }}
        align="left"
      />
      <Comment
        message="This looks great!"
        cursor={{
          position: 'right',
          color: 'teal',
        }}
        align="right"
      />
    </div>
  );
}
