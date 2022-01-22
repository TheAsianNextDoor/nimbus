import {
    createContext,
    ReactElement,
    useContext,
    useState,
} from 'react';
import { ChildrenType } from 'utils/commonTypeUtils';
import Queue from 'yocto-queue';

type QueueType = Queue<string>;
type UpdateQueueType = (val: QueueType) => void;
interface QueueProviderProps {
    queue?: QueueType,
    updateQueue: UpdateQueueType,
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const QueueContext = createContext<QueueProviderProps>();
export const UseQueue = (): QueueProviderProps => useContext(QueueContext);

// const QueueUpdateContext = createContext<UpdateQueueType>(() => { });

// export const useQueue = (): QueueType => useContext(QueueContext);
// export const useUpdateQueue = (): UpdateQueueType => useContext(QueueUpdateContext);

export const QueueProvider = ({ children }: ChildrenType): ReactElement => {
    const [
        queue,
        updateQueue,
    ] = useState<QueueType>();

    const providerValue: QueueProviderProps = {
        queue,
        updateQueue,
    };

    return (
        <QueueContext.Provider value={providerValue}>
            {children}
        </QueueContext.Provider>
    );
};
